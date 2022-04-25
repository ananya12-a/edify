<template>
  <div>
      <TreeChart :json="treeData" @click-node="clickNode"/>
  </div>
</template>

<script>
import TreeChart from "vue-tree-chart";
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/components/edify-345610-1d5e47062229.json'); 
	export default {
        components:{
            TreeChart
        },
		props: {
            sheetName:String,
        },
		data() {
			return {
                rows: [],
                nodes: {
                    node1: { name: "Node 1" },
                    node2: { name: "Node 2" },
                    node3: { name: "Node 3" },
                    node4: { name: "Node 4" },
                },
                edges: {
                    edge1: { source: "node1", target: "node2" },
                    edge2: { source: "node2", target: "node3" },
                    edge3: { source: "node3", target: "node4" },
                },
                treeData:  {
                    name: 'root',
                    image_url: require(`@/assets/instructors/A.png`),
                    class: ["rootNode"],
                    children: [
                    {
                        name: 'children1',
                        image_url: require(`@/assets/instructors/A.png`)
                    },
                    {
                        name: 'children2',
                        image_url: require(`@/assets/instructors/A.png`),
                        mate: [{
                        name: 'mate',
                        image_url: require(`@/assets/instructors/A.png`)
                        }],
                        children: [
                        {
                            name: 'grandchild',
                            image_url: require(`@/assets/instructors/A.png`)
                        },
                        {
                            name: 'grandchild2',
                            image_url: require(`@/assets/instructors/A.png`)
                        },
                        {
                            name: 'grandchild3',
                            image_url: require(`@/assets/instructors/A.png`)
                        }
                        ]
                    },
                    {
                        name: 'children3',
                        image_url: require(`@/assets/instructors/A.png`)
                    }
                    ]
                }
			}
		},
		methods:{
			async accessSpreadSheet() {
                this.loading = true
				const doc = new GoogleSpreadsheet('1l8NALL87S5_vra7CM6UCBXBNTI7dY4kkIE1fO2GYBkw');
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo(); 
                await doc.loadInfo(); // loads document properties and worksheets
                console.log(doc.title);
                const sheet = doc.sheetsByTitle[this.sheetName];
                console.log(sheet.title);
                console.log(sheet.rowCount);

                // read rows
                const rows = await sheet.getRows(); // can pass in { limit, offset }
                const dataRow = []
                rows.map(row =>
                dataRow.push({
                    proj_name: row._rawData[0],
                    proj_skill: row._rawData[1],
                    prereq: row._rawData[2],
                    recs: row._rawData[3],
                    mat: row._rawData[4],
                    link: row._rawData[5],
                    difficult: row._rawData[6]
                })
                )
                this.rows = dataRow
                
            },
            clickNode: function(node){
            // eslint-disable-next-line
                console.log(node)
            }
		},
		created() {
            this.accessSpreadSheet();
            
		}
		
	}
</script>

<style scoped>

</style>