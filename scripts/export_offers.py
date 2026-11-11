import re
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side

root = Path(__file__).resolve().parents[1]
text = (root / "lib" / "demos.ts").read_text(encoding="utf-8")
parts = re.findall(r'slug: "([^"]+)"', text)
blocks = re.split(r'slug: "[^"]+"', text)[1:]
rows = []
for slug, part in zip(parts, blocks):
    if slug == "string":
        continue

    def grab(key: str) -> str:
        match = re.search(rf'{key}:\s*"([^"]*)"', part)
        return match.group(1) if match else ""

    rows.append(
        (
            grab("city"),
            grab("name"),
            grab("phoneDisplay"),
            grab("offerTo"),
            "/" + slug,
            grab("offer"),
        )
    )

wb = Workbook()
ws = wb.active
ws.title = "Залы"
ws.append(["Город", "Заведение", "Телефон", "Куда отправить", "Путь на сайте", "Текст"])
for row in rows:
    ws.append(row)

fill = PatternFill("solid", fgColor="1F1F1F")
for cell in ws[1]:
    cell.fill = fill
    cell.font = Font(color="FFFFFF", bold=True, name="Calibri")
    cell.alignment = Alignment(vertical="center")

thin = Border(
    left=Side(style="thin", color="DDDDDD"),
    right=Side(style="thin", color="DDDDDD"),
    top=Side(style="thin", color="DDDDDD"),
    bottom=Side(style="thin", color="DDDDDD"),
)
for row in ws.iter_rows(min_row=2, max_row=ws.max_row, max_col=6):
    for cell in row:
        cell.alignment = Alignment(wrap_text=True, vertical="top")
        cell.border = thin
        cell.font = Font(name="Calibri", size=11)

for index, width in enumerate([18, 24, 28, 36, 24, 88], start=1):
    ws.column_dimensions[chr(64 + index)].width = width

ws.auto_filter.ref = ws.dimensions
ws.freeze_panes = "A2"
ws.row_dimensions[1].height = 22
for index in range(2, ws.max_row + 1):
    ws.row_dimensions[index].height = 96

out = root.parent / "залы-демо.xlsx"
wb.save(out)
print(f"{len(rows)} {out}")
