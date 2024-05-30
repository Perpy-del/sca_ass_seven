const existingSlugs = new Set();

function sluggify(text) {
    if (!text) {
        return null;
    }

    let slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') 
        .replace(/\s+/g, '-') 
        .replace(/-+$/, '');

    let uniqueSlug = slug;
    let counter = 1;

    // Ensure the slug is unique by appending a counter if necessary
    while (existingSlugs.has(uniqueSlug)) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
    }

    existingSlugs.add(uniqueSlug);
    return uniqueSlug;
}

module.exports = sluggify;