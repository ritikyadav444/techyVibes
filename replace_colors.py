#!/usr/bin/env python
import os

filepath = "assets/index-yL-dZba2.js"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all remaining blue colors with purple brand color
replacements = [
    ('className: "text-blue-500 red-rose"', 'className: "text-[#650076] red-rose"'),
    ('className: "text-blue-600 text-sm"', 'className: "text-[#650076] text-sm"'),
    ('className: "mx-auto text-blue-600 mb-4"', 'className: "mx-auto text-[#650076] mb-4"'),
    ('className: "text-blue-600 mb-4"', 'className: "text-[#650076] mb-4"'),
]

for old, new in replacements:
    content = content.replace(old, new)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("All blue colors replaced with #650076")
