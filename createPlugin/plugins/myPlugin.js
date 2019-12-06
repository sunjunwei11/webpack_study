class MyPlugin {
	constructor(options) {
		this.options = options
		this.externalModules = {}
	}

	apply(compiler) {
		compiler.hooks.emit.tap('CodeBeautify', (compilation)=> {
			Object.keys(compilation.assets).forEach((data)=> {
				let content = compilation.assets[data].source(); // 欲处理的文本
				content = content + ';console.log(100);';
				compilation.assets[data] = {
					source(){
						return content
					},
					size(){
						return content.length
					}
				}
			})
		})
	}
}
module.exports = MyPlugin;
