const SCORE_SHEET_NAME = "排行榜成績";
const SCORE_HEADERS = [
  "送出時間",
  "回合",
  "回合名稱",
  "姓名或座號",
  "分數",
  "答對題數",
  "總題數",
  "錯題數",
  "作答秒數",
  "是否通關"
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = parseRequest_(e);
    const sheet = getScoreSheet_();
    sheet.appendRow([
      new Date(),
      Number(data.round) || "",
      cleanText_(data.roundTitle, 80),
      cleanText_(data.name, 40),
      clampNumber_(data.score, 0, 100),
      clampNumber_(data.correct, 0, 999),
      clampNumber_(data.total, 0, 999),
      clampNumber_(data.wrong, 0, 999),
      clampNumber_(data.time, 0, 86400),
      data.cleared === true || data.cleared === "true" ? "是" : "否"
    ]);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, message: String(error.message || error) });
  } finally {
    lock.releaseLock();
  }
}

function getScoreSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("請把這段程式貼在 Google 試算表的 Apps Script 中。");
  }

  let sheet = spreadsheet.getSheetByName(SCORE_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SCORE_SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(SCORE_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, SCORE_HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#f4b942")
      .setFontColor("#1d2330");
    sheet.autoResizeColumns(1, SCORE_HEADERS.length);
  }

  return sheet;
}

function parseRequest_(e) {
  const raw = e && e.postData && e.postData.contents;
  if (!raw) return (e && e.parameter) || {};

  try {
    return JSON.parse(raw);
  } catch (error) {
    return (e && e.parameter) || {};
  }
}

function cleanText_(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function clampNumber_(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return Math.max(min, Math.min(max, Math.round(number)));
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
