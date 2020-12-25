export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe53d5b605fe16389a29cfb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kxi3k168',
                  apiId: '8437b17b-55cb-4130-b7cf-7f909a3d16d1'
                },
                {
                  buildHookId: '5fe53d5cd3fff98a1ffec2d4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kbx9imvd',
                  apiId: '0fbb645e-2182-4296-ba27-fdb757d06a71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawnerdawn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kbx9imvd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
