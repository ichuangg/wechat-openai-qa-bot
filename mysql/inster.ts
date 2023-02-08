import sequelize from './tables'

sequelize.models.Config.create({
    config_group: 'boot',
    config_item: 'WechatyPuppet',
    key: 'puppetName',
    value: 'wechaty-puppet-xp',
    explain: '可选值：\n' +
        'wechaty-puppet-wechat\n' +
        'wechaty-puppet-xp\n' +
        'wechaty-puppet-padlocal\n' +
        'wechaty-puppet-service'
})
