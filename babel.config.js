module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      ['prismjs', {
        languages: ['javascript', 'html', 'css', 'bash', 'java', 'kotlin', 'docker', 'diff', 'python', 'yaml'],
        plugins: [
          'line-numbers',
          'show-language',
          'toolbar',
          'copy-to-clipboard',
          'diff-highlight'
        ],
        css: true
      }]
    ]
  };
  