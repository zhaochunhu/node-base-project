"use strict";
module.exports = function (sequelize, dataTypes) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS9iYW5uZXIvYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsU0FBYyxFQUFFLFNBQWM7SUFDckQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDckMsRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUM5QixPQUFPLEVBQUUsVUFBVTtZQUNuQixLQUFLLEVBQUUsSUFBSTtTQUNkO0tBQ0osRUFBRTtRQUNLLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxRQUFRO0tBQ3RCLENBQUMsQ0FBQztJQUNQLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJlbnRpdHkvYmFubmVyL2Jhbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlcXVlbGl6ZTogYW55LCBkYXRhVHlwZXM6IGFueSkge1xuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplLmRlZmluZShcImJhbm5lclwiLCB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGF0YVR5cGVzLlVVSURWNCxcbiAgICAgICAgICAgIGNvbW1lbnQ6IFwiYmFubmVySURcIixcbiAgICAgICAgICAgIGZpZWxkOiBcImlkXCIsXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgICAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICAgICAgICAgIHRhYmxlTmFtZTogXCJiYW5uZXJcIlxuICAgICAgICB9KTtcbiAgICByZXR1cm4gbW9kZWw7XG59OyJdfQ==
