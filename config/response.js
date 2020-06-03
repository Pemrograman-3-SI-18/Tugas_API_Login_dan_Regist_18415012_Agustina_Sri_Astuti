module.exports = {
    commonEroor: {
        error: true,
        msg : 'terjadi kesalahan pada server'
    },
    commonEroorMsg: (msg) => {
        return {
            error: true,
            msg : msg
        }
    },
    commonSuccess : {
        error: false,
        msg : 'berhasil memuat permintaan'
    },
    commonSuccessMsg: (msg) => {
        return {
            error: false,
            msg : msg
        }
    },
    commonResult : (data) => {
        return {
            error : false,
            msg : 'berhasil memuat data',
            data : data
        }
    }
};
