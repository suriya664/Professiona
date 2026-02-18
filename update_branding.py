import os
import re

root_dir = "c:/slot 3 (30)/tutor-master"
favicon_link = '<link rel="icon" type="image/png" href="images/favicon.png">'

for filename in os.listdir(root_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(root_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # 1. Remove branding from title
        # Pattern: <title>Page Name &mdash; Free Website Template by Colorlib</title>
        # Replacement: <title>Page Name &mdash; Tutor</title>
        content = re.sub(r"(<title>.*?)(&mdash; Free Website Template by Colorlib)(</title>)", r"\1\3", content)
        content = re.sub(r"(<title>.*?)(\s*&mdash;\s*Free Website Template by Colorlib)(</title>)", r"\1\3", content)

        # 2. Add favicon if not present
        if "rel=\"icon\"" not in content and "rel=\"shortcut icon\"" not in content:
            content = content.replace("</head>", f"  {favicon_link}\n</head>")
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {filename}")
