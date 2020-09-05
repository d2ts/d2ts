import baseConfig from '../../rollup.config'

const overrideConfig = {...baseConfig}

overrideConfig.output.format = 'iife'
overrideConfig.output.name = 'd2tsExample'

export default overrideConfig
