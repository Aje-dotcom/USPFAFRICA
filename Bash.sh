# 1. Initialize or verify Git remote points to your USPF repository
git init
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/aje-dotcom/USPF_ChangeMakerChallenge.git

# 2. Ensure sensitive environment files are ignored
echo ".env*" >> .gitignore
echo "!.env.example" >> .gitignore

# 3. Stage and commit the full codebase + version control documentation
git add README.md CHANGELOG.md CONTRIBUTING.md .gitignore .
git commit -m "docs(release): add full version control documentation, changelog, and AbujaConnect 2.0 release"

# 4. Create semantic version tags for judges to inspect project evolution
git tag -a v1.0.0 -m "v1.0.0: Initial Bwari Connect (MamaCare + Bwari Learn) clickable prototype"
git tag -a v1.1.0 -m "v1.1.0: Usability audit fixes (debounce removal, Step 0 consent, Step 3 RED circuit-breaker, Zod server triage)"
git tag -a v2.0.0 -m "v2.0.0: AbujaConnect 2.0 full FCT 6-Area-Council & 62-ward directory, GIS scripts & IoT telemetry demo"

# 5. Push main branch and all release tags to GitHub
git push -u origin main --tags