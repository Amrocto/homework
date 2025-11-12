function failed(mes){ console.error(mes); process.exit(1); }

export function isOlderThan14(dateStr, now = new Date()) {
  const re = /^(\d{4})-(\d{2})-(\d{2})$/;
  const m = re.exec(dateStr);
  if (!m) throw new Error("invalid format");

  const year = Number(m[1]);
  const month = Number(m[2]) - 1;
  const day = Number(m[3]);

  const birthLocal = new Date(year, month, day);
  if (
    birthLocal.getFullYear() !== year ||
    birthLocal.getMonth() !== month ||
    birthLocal.getDate() !== day
  ){
    throw new Error("uncorrect format");
  }

  const birthUTC = Date.UTC(year, month, day);
  const limitUTC = Date.UTC(
    now.getFullYear() - 14,
    now.getMonth(),
    now.getDate()
  );

  // strict >14:
  return birthUTC < limitUTC;
  // если нужно "14 и старше", верни: birthUTC <= limitUTC;
}

// ---- CLI wrapper ----
if (import.meta && import.meta.url === `file://${process.argv[1]}`) {
  const input = process.argv[2];
  if (!input) failed("invalid input");
  try {
    console.log(isOlderThan14(input) ? true : false);
  } catch (e) {
    failed(String(e.message || e));
  }
}
