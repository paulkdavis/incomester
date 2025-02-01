import { NetWorth } from "./net-worth.model";
import { Asset } from "./asset.model";
import { Liability } from "./liability.model";

describe('NetWorth', () => {

  it('should correctly calculate net worth', () => {
    // Arrange (Setup test data)
    const assets = [
      new Asset("Car", 10000),
      new Asset("Savings", 5000)
    ];

    const liabilities = [
      new Liability("Car Loan", 4000),
      new Liability("Credit Card Debt", 1000)
    ];

    const netWorth = new NetWorth(assets, liabilities);

    // Act (Call the function being tested)
    const result = netWorth.getNetWorth();

    // Assert (Check if the result is correct)
    expect(result).toBe(10000 + 5000 - (4000 + 1000)); // Should be 10,000
  });

  it('should return 0 if there are no assets and no liabilities', () => {
    const netWorth = new NetWorth([], []);
    expect(netWorth.getNetWorth()).toBe(0);
  });

  it('should return negative net worth if liabilities exceed assets', () => {
    const assets = [new Asset("Laptop", 2000)];
    const liabilities = [new Liability("Loan", 5000)];

    const netWorth = new NetWorth(assets, liabilities);
    expect(netWorth.getNetWorth()).toBe(2000 - 5000); // -3000
  });

});
