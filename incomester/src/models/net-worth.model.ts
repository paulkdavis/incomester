import { Asset } from "./asset.model";
import { Liability } from "./liability.model";


export class NetWorth {

    private assets: Asset[];
    private liabilities: Liability[];

    constructor(assets: Asset[], liabilities: Liability[]) {
        this.assets = assets;
        this.liabilities = liabilities;
    }

        private getAssetSum(): number{
            let sum = 0;
            for(let i = 0; i < this.assets.length; i++){
                sum += this.assets[i].value;
            }
            return sum;
        }

        private getLiabilitiesSum(): number{
            let sum = 0;
            for(let i = 0; i < this.liabilities.length; i++){
                sum += this.liabilities[i].value;
            }
            return sum;
        }

    public getNetWorth(): number{
        return this.getAssetSum() - this.getLiabilitiesSum();
    }
  
}