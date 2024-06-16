Next.js important Notes:

======================================
Creating Pages in Next.js
Pages are associated with a route based on their file name. For example, in development:

pages/index.js is associated with the / route.
pages/posts/first-post.js is associated with the /posts/first-post route.

======================================
Creating Linking in Next.js
When linking between pages on websites, you use the <a> HTML tag.

======================================

Next.js Links component:
Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.

======================================

What is code splitting? And what does it mean to do it automatically?

Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

======================================
Prefetching in Next.js
In a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!