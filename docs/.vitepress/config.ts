import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
    title: 'IdMUnit Docs',
    description: 'Documentation for IdMUnit.',
    themeConfig: {
        logo: '/idmunit-icon.svg',
        sidebar: sidebarConnectors(),
        outline: 'deep',
    },
    cleanUrls: 'without-subfolders',
    markdown: {
        theme: 'nord',
    },
    base: '/idmunit-docs/'
})

function sidebarConnectors(): DefaultTheme.Sidebar {
    return [
        {
            text: 'Connectors',
            items: [
                { text: 'Command Line', link: '/connectors/command-line'},
                { text: 'cURL', link: '/connectors/curl'},
                { text: 'DTF', link: '/connectors/dtf'},
                { text: 'DXCMD', link: '/connectors/dxcmd'},
                { text: 'eDirectory LDAP', link: '/connectors/edir-ldap'},
                { text: 'Name Value Pairs File', link: '/connectors/file-name-value-pairs'},
                { text: 'Google Apps', link: '/connectors/google-apps'},
                { text: 'ISeries', link: '/connectors/iseries'},
                { text: 'Iteration', link: '/connectors/iteration'},
                { text: 'JDBC', link: '/connectors/jdbc'},
                { text: 'JMS', link: '/connectors/jms'},
                { text: 'Mail', link: '/connectors/mail'},
                { text: 'MockShim', link: '/connectors/mockshim'},
                { text: 'OpenIDM', link: '/connectors/openidm'},
            ]
        }
    ]
}