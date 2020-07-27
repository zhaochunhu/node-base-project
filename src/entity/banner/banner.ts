module.exports = function (sequelize: any, dataTypes: any) {
    const model = sequelize.define("banner", {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
            defaultValue: dataTypes.UUIDV4,
            comment: "bannerID",
            field: "id",
        }
    }, {
            timestamps: false,
            tableName: "banner"
        });
    return model;
};