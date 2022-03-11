import os

for root, _, files in os.walk("."):
    if ".gitkeep" in files:
        os.remove(os.path.join(root, ".gitkeep"))
