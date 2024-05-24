# 🏗 STICK TO THE PLAN
======================================

## Stick to the Plan

Welcome to **Stick to the Plan** - a decentralized application (dApp) designed to help you meticulously craft and manage your financial plans. Accessible via [sticktotheplan.x](https://sticktotheplan.x), our platform empowers users to create and edit financial plans in a customizable spreadsheet environment.

### Key Features

- **Editable Spreadsheet Interface**: Easily create and manage your financial plans within an intuitive and editable spreadsheet.
- **Net Value Calculation**: Each row in the spreadsheet will automatically calculate the net value, indicating whether it is an asset, liability, or both.
- **Profit and Loss Plans**: Define your profit and loss strategies, specifying when to sell assets based on your goals.
- **Time Horizon**: Set and track the time horizon for each financial plan, aligning with your long-term or short-term objectives.
- **Reasoning and Customizable Columns**: Document the reasoning behind your financial decisions and customize columns to suit your needs. The net amount column remains permanent to ensure consistent tracking.
- **Future AI Integration**: In upcoming updates, users will be able to utilize a "Reason with AI" feature, allowing interaction with AI for financial analysis and decision-making. This will enhance your ability to research and develop sound financial reasoning.
- **Research Tab**: Future enhancements will include a research tab and additional features to support comprehensive financial planning.

### How to Use

1. **Visit [sticktotheplan.x](https://sticktotheplan.x)** and create an account or log in.
2. **Create your financial plan** by adding and editing rows in the spreadsheet.
3. **Track your net value** automatically and adjust your strategies as needed.
4. **Plan your profit and loss scenarios** by setting sell points for your assets.
5. **Document your reasoning** and utilize customizable columns to tailor the spreadsheet to your preferences.
6. **Stay tuned for AI integration and additional features** to enhance your planning experience.

### Contributing

We welcome contributions from the community to help improve Stick to the Plan. Please read our [Contributing Guidelines](CONTRIBUTING.md) for more information.

### License

Stick to the Plan is released under the [MIT License](LICENSE).

---

🚀 Let's stick to the plan and achieve financial success together!

For more details and updates, visit our [GitHub Repository](https://github.com/your-repo-url).

---

Feel free to reach out with any questions or feedback. Happy planning!


======================================
Also, note - from scaffold.eth-2
<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.17)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.