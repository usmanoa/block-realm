export const data = [
    {
        moduleId: 1,
        title: 'Introduction to Bitcoin and Blockchain',
        numberOfLessons: 4,
        lessons: [
            {
                lessonId: 1,
                lessonTitle: 'Introduction to Bitcoin and Blockchain',
                lessonContent: `Bitcoin was introduced in 2008 by an unknown programmer who goes by the pseudonym Satoshi Nakamoto in a white paper called Bitcoin.
Bitcoin is the first decentralized digital currency that is controlled completely by its users with no involvement of middlemen or central authorities. Bitcoin is a means of payment, a store of value and is powered by its users over the internet. This means that Bitcoin cannot be shut down by any government.
Bitcoin as a means of payment means that you can transparently transfer money from one person to another, regardless of where they may be in the world, without a bank or payment processor.
The decentralized nature of Bitcoin means it’s cheaper to transfer and this is because you don’t have to pay fees to banks, payment processors and clearinghouses. Bitcoin is accepted as money today because it’s a suitable medium of exchange & store of value
                `
            },
            {
                lessonId: 2,
                lessonTitle: 'How Bitcoin are created',
                lessonContent: `New Bitcoins are created by a decentralized process called Mining. Mining is simply the process of confirming pending transactions on the blockchain for a reward. Miners confirm pending transactions by solving a complex mathematical problem that involves getting a value called the nonce. Miners 'mine' by running extremely powerful computers (known as ASICs) that race against other miners in an attempt to solve for the nonce.
Anytime a transaction is confirmed, 12.5 new BTC are created (mined) and this happens roughly every 10 minutes. Transactions that have been mined are verified and recorded by computers called 'Nodes'. These computers are decentralized and distributed across the world
The blockchain network (miners, nodes, the blockchain) performs the same function as the Banks, Visa, and MasterCard, but with a few key differences. Unlike those central authorities, however, Bitcoin miners and nodes are spread out across the world and record transaction data in a public list that can be accessed by anyone.
                `
            },
            {
                lessonId: 3,
                lessonTitle: 'The Bitcoin Blockchain',
                lessonContent: `The blockchain is the network that makes it possible for Bitcoin (BTC) to be sent between users in a secure and verifiable way without passing through a central authority, such as a bank or payment gateway.
It is like a giant spreadsheet that contains every single Bitcoin transaction, when it was sent, the address it was sent from, and the address it was sent to. Every now & then, there is a new transaction, and this transaction gets updated in this spreadsheet, meaning that the document is continually expanding with new information. 
In technical terms, the columns where each transaction is recorded are called blocks. Each block is linked to the data (or column) of the previous block; hence, we have a chain of blocks or a blockchain.
There is no one person or organization in charge of the blockchain. The blockchain is open, and everyone can see the details of each entry/record, so when there are updates, it becomes publicly available in real-time.
                `
            },
            {
                lessonId: 4,
                lessonTitle: 'Bitcoin Use Cases',
                lessonContent: `Investment: People hold BTC as assets with the expectation that they will ultimately increase in value over time.
Remittances: Due to the ease and low cost of transferring BTC from one party to another, people often choose BTC and other cryptocurrencies as a way to settle cross-border payments.
Trading: Due to the fluctuations in price in the short term, professional traders trade in Bitcoin in the same way that stock or forex is traded
                `
            },
        ]
    },
    {
        moduleId: 2,
        title: 'Types of Bitcoin Trading',
        numberOfLessons: 4,
        lessons: [
            {
                lessonId: 1,
                lessonTitle: 'Day Trading',
                lessonContent: `Because of the rapid and frequent daily price movements of bitcoin, traders conduct multiple trades all through the day, and try to make profit from these price movements. Day traders spend long hours of the day looking at charts and graphs on their computer screens and making decisions on when to buy and when to sell. Day trading is mostly a full-time job as it requires a lot of time and attention.`
            },
            {
                lessonId: 2,
                lessonTitle: 'Swing Trading',
                lessonContent: `Swing trading is catching the price trends and entering the market at the beginning of an upward price movement and holding on until the movement dies out to sell. Unlike day traders, swing traders may wait days, weeks or even months before they reach their desired end result`
            },
            {
                lessonId: 3,
                lessonTitle: 'Scalping',
                lessonContent: 'Scalping is a day trading strategy that focuses on making profits on small price changes. Scalping is day trading but on steroids. Scalpers carry out hundreds of trades (Buying low and selling higher) every day and are in it for the small profits. These small profits per trade become significant at the end of the day, after about a hundred trades. Some scalpers target low margins, which may seem like nothing, but after a hundred trades in a day becomes substantial. Such volume from 15 trading days becomes a huge profit.'
            },
            {
                lessonId: 4,
                lessonTitle: 'Momentum Trading',
                lessonContent: `Momentum traders are in it for the trend. They identify when the price of Bitcoin has a breakout and try to capture as much momentum of the price either upwards or downwards. When they see they the price of bitcoin is moving significantly either upwards or downwards on high volume, that's their cue to enter the market and make trades. This may last for minutes, hours or days, depending on how quickly the price moves and when it changes direction.`
            }
        ]
    }
]