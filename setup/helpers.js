const originCodeToOriginMap = require('./originCodesToOrigin.json')

const originCodeToOrigin = (originCode) => {
    return originCodeToOriginMap[originCode]
}

module.exports = {originCodeToOrigin}