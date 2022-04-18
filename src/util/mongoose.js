module.exports = {
    // Todo chuyển obj trong courses về obj bình thường để show ra đc (mongooseObject.toObject())
    mutipleMongooseToObject: function (mongooseArray) {
        return mongooseArray.map((mongooseObject) => mongooseObject.toObject())
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}
