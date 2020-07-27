module.exports = function (sequelize: any, dataTypes: any) {
    const model = sequelize.define("userHealthInformation", {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
            comment: "用户健康信息ID",
            field: "id",
        }
    }, {
            timestamps: false,
            tableName: "user_health_information"
        });
    return model;
};