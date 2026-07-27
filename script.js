const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file === 'page.tsx') {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const pages = walkSync('./app');

pages.forEach(page => {
  let content = fs.readFileSync(page, 'utf8');

  // Add import if not present
  if (!content.includes('import CTA from') && !content.includes('import CTA from "@/components/CTA"')) {
    // try to put it after the last import
    const importMatch = content.match(/import.*?;\n/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + 'import CTA from "@/components/CTA";\n');
    } else {
      content = 'import CTA from "@/components/CTA";\n' + content;
    }
  }

  // Remove existing CTA banner in page.tsx if present
  if (page === 'app\\\\page.tsx' || page === 'app/page.tsx') {
    // Note: We'll modify page.tsx manually to ensure we don't break FAQPage
  } else {
    // Insert <CTA /> before the last </div>
    if (!content.includes('<CTA />')) {
      content = content.replace(/<\/div>\s*\);\s*}\s*$/, '      <CTA />\n    </div>\n  );\n}\n');
    }
  }

  fs.writeFileSync(page, content);
  console.log('Processed', page);
});
