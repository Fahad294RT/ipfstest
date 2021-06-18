const IPFS = require('ipfs-core');
const IPFSRepo = require('ipfs-repo')

async function getData(node, cid) {
	let data = ""
	for await (const buf of node.cat(cid)) {
		data += buf.toString()
	}
	return data
}

(async ()=>{

	// const repo = new Repo('/tmp/ipfs-repo')
	// await repo.init({ cool: 'config' })
	// await repo.open()

	const node = await IPFS.create()

	const { cid } = await node.add('fhk294')
	console.log(`DATA: "${await getData(node, cid)}" (${cid})`)

	//clear local: ipfs repo gc
	const history= [
		"QmeScsWoWs8MCZ5ndEuX3aGuJX5YrtQ25R2ExTMRfhQyiB",
		"QmR9HfLRLs1iTEzaTNeUDh3FqvVGiWdFEVtLNd8vxLqA9j",
		"QmXDbmja4v4axN2GFTwzbLdy1SP7uEtvQqzAwnAfH8Unsj",
		"QmesbwSsYTwakUPwmYmbGDjaDNdZJhPxo7SJMXMD2zYhut",
		"QmUEmzru2z1SYJ7KiCh11JGrZe379V2SsSpDNoQyzndpXD",
		"QmNRCQWfgze6AbBCaT1rkrkV5tJ2aP4oTNPb5JZcXYywve",
		"QmZyZaz7Nu6a7jNEJu9S5fT8Ube5nusgc6RhdNK3tpwEdo",
		"QmNWkG9TJzELmsAnj1CGZJtNhHC56pLQR5tEE7iC3YGpkw"
	]

	for (let h of history) {
		console.log(`HIST: "${await getData(node, h)}" (${h})`)
	}

	const value = await repo.config.get('a.b.c')
	console.log('config.a.b.c = ', value)
})();

//12D3KooWAU1wtrFtu9TKj4JkbV3SQSiocAkYvC6Cda1KHmF46Xaf
//QmTLvhdzoahSJ7Trg4KXa6codUR7aectpENXoDV51Ypmdm


// const IPFS = require('ipfs')
// const node = new IPFS()

// node.on('ready', () => {
//    // start the API gateway
//     const Gateway = require('ipfs/src/http');
//     const gateway = new Gateway(node);
//     return gateway.start();
// })
//https://gateway.ipfs.io/ipns/QmeScsWoWs8MCZ5ndEuX3aGuJX5YrtQ25R2ExTMRfhQyiB