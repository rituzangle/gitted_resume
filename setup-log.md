## ✏️ July 2, 2025 – Markdown Import Fix

**Issue:**  
Attempted to use deprecated `<Markdown />` component from `astro/components` → caused runtime error

**Fix:**  
Used Astro’s direct `.md` import as component + called `resumeContent.default`

**Updated snippet in `index.astro`:**
```astro
<ResumeLayout>
  <Hero />
  <article class="prose prose-lg font-body max-w-none mt-8">
    {resumeContent.default}
  </article>
</ResumeLayout>

