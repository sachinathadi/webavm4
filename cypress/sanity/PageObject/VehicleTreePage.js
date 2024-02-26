import { version } from "chai"

class VehicleTreePage {

    getFilterField()
    {
        return cy.get('#vehicleTree_avm_tree_search')
    }

}
    
export default VehicleTreePage