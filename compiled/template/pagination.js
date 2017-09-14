"use strict";

module.exports = function (h, that) {
    if (that.opts.pagination && !that.opts.pagination.dropdown) {

        var name = that.vuex ? that.name : that.id;

        return h(
            "pagination",
            {
                ref: "pagination",
                attrs: {
                    "for": name,
                    vuex: that.vuex,
                    records: that.count,
                    "per-page": parseInt(that.limit),
                    chunk: that.opts.pagination.chunk,
                    "count-text": that.opts.texts.count,
                    "pages-count-text": that.opts.texts.pagesCount,
                    "count-text-type": that.opts.pagination.textType,
                }
            },
            []
        );
    }

    return '';
};