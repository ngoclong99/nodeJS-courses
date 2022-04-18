const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

// Tạo 1 đối tượng
const Course = new Schema(
    {
        _id: {type: Number},
        name: { type: String },
        description: { type: String },
        level: { type: String },
        image: { type: String },
        video_id: { type: String },
        time: { type: String },
        total: { type: Number },
        slug: { type: String, slug: 'name' }
    },
    {
        _id: false,
        timestamps: true
    }
)

// Add plugins
mongoose.plugin(slug)
Course.plugin(AutoIncrement)
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })


// TODO Accessing a Model
module.exports = mongoose.model('Course', Course)
