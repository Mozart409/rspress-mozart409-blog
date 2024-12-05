# Mozart409's Personal Blog Project

## Overview

This project is a personal blog hosted using Rspress, a framework for creating blogs with modern web technologies. The blog features posts about various topics including Docker, Kubernetes, Remix, and more, providing insights, tutorials, and personal experiences.

### Project Structure

The project follows this directory structure:

```plaintext
.
├── .gitignore               # Specifies intentionally untracked files to ignore
├── Readme.md                # This file, providing an overview of the project
├── docs                     # Documentation and blog content directory
│   ├── blog
│   │   ├── _meta.json       # Metadata for blog organization
│   │   └── ...              # Various blog posts in .mdx format
│   ├── index.mdx            # Main page content for the blog
│   └── public               # Public assets like images, SVGs, etc.
├── package.json             # Project dependencies and scripts
├── pnpm-lock.yaml           # Lock file for pnpm package manager
├── rspress.config.ts        # Configuration for Rspress
├── src                      # Source files, including the worker handler
│   └── index.ts             # Entry point for Cloudflare Workers
├── tsconfig.json            # TypeScript configuration
└── wrangler.toml            # Configuration for Cloudflare Workers deployment
```

### Prerequisites

- Node.js (version >= 20)
- pnpm (Node.js package manager)

### Configuration

- Rspress Configuration: Edit rspress.config.ts for blog settings like title, description, and themes.
- Cloudflare Workers: Configuration for deployment is in wrangler.toml.

### Running Locally

To run the blog in development mode:

```bash
pnpm run rs.dev
```

This command starts a local development server using Rspress for live reloading of content.

```bash
pnpm run rs.build
```

This command compiles the blog into static files ready for deployment.

### Deployment

```bash
pnpm run deploy
```

This uses Wrangler (the Cloudflare CLI) to deploy your blog to Cloudflare Workers. Make sure you have your Cloudflare account set up and credentials configured.

### Features

- Markdown Support: Write posts in Markdown or MDX for enhanced formatting and interactivity.
- Syntax Highlighting: Code blocks in blog posts are highlighted using Shiki.
- Dynamic Imports: Lazy loading of components with react-lazy-with-preload.
- SEO Optimization: Customizable metadata for better search engine indexing.
- Responsive Design: The theme supports various device widths for optimal viewing.

### Plugins

- @rspress/plugin-shiki: For syntax highlighting in code blocks.

### Blog Posts

- Structure: Blog posts are located in the docs/blog directory, organized by topic.
- Metadata: Use _meta.json for defining sidebar navigation and post categorization.

### Contributing

- Contributions are welcome! Please fork the repository and submit pull requests for features, bug fixes, or new blog content.

### License

This project is licensed under the MIT License (LICENSE).

### Acknowledgements

- Thanks to the creators of Rspress for providing an excellent static site generator.
- Appreciation to the Cloudflare team for making serverless deployment straightforward with Workers.
