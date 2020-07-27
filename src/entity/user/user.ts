module.exports = function (sequelize: any, dataTypes: any) {
    const model = sequelize.define("user", {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
            comment: "用户ID",
            field: "id",
        },
        username: {
            type: dataTypes.STRING,
            field: "username",
            comment: "用户名称"
        },
        password: {
            type: dataTypes.STRING,
            field: "password",
            comment: "密码"
        }
    }, {
            timestamps: false,
            tableName: "user"
        });
    return model;
};