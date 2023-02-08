// const { Sequelize } = require('sequelize');
import {Sequelize, DataTypes} from 'sequelize'
// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize('wechatboot', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

const Config = sequelize.define("Config", {
    config_group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    config_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
    },
    explain: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'system_config'
})
const Switch = sequelize.define("Switch", {
    config_group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    function_item: {
        type: DataTypes.STRING,
        allowNull: false
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,
    },
    explain: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'function_switch'
})
const Contact = sequelize.define("Contact", {
    wxid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.INTEGER,
    },
    avatar: {
        type: DataTypes.BOOLEAN,
    },
    phone: {
        type: DataTypes.STRING,
    },
    notice: {
        type: DataTypes.STRING
    },
    enable_notice : {
        type: DataTypes.BOOLEAN,
    }
}, {
    tableName: 'contacts'
})
const Room = sequelize.define("Room", {
    wxid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
    },
    ownerId: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    notice: {
        type: DataTypes.STRING
    },
    enable_notice : {
        type: DataTypes.BOOLEAN,
    }
}, {
    tableName: 'rooms'
})

const notice = sequelize.define("Room", {
    content : {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING
    },
    file: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.STRING,
    },
    room: {
        type: DataTypes.STRING,
    },
    start_time: {
        type: DataTypes.DATE,
    },
    cycle: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER
    },
    enable : {
        type: DataTypes.BOOLEAN,
    }
}, {
    tableName: 'notices'
})

const messageRecord = sequelize.define("messageRecord", {
    send_time : {
        type: DataTypes.DATE,
    },
    name: {
        type: DataTypes.STRING
    },
    topic: {
        type: DataTypes.STRING
    },
    messagePayload: {
        type: DataTypes.STRING,
    },
    wxid: {
        type: DataTypes.STRING,
    },
    roomid: {
        type: DataTypes.STRING,
    },
    message_type: {
        type: DataTypes.STRING
    },
    file: {
        type: DataTypes.STRING
    },
    atme: {
        type: DataTypes.BOOLEAN
    },
    mysend: {
        type: DataTypes.BOOLEAN
    },
}, {
    tableName: 'message_records'
})
// sequelize.sync({ force: true });

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
