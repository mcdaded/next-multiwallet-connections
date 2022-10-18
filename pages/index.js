import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BinanceConnector } from '../components/BinanceConnector';
import { WalletProvider } from 'react-binance-wallet';
import { MetaMaskProvider } from 'metamask-react';
import { MetamaskConnector } from '../components/MetamaskConnector';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div>
      <Head>
        <title>Next.js Wallets Sample</title>
        <meta
          name="description"
          content="Sample next.js for working out with wallet connections"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen text-left items-start">
        <div className="mx-auto max-w-3xl pt-8">
          <h1 className="text-4xl font-bold py-4">Home Page</h1>
          <span className="text-blue-400 hover:underline hover:text-blue-600 pt-2 pb-8">
            <Link href="/">Home</Link>
          </span>
          <MetaMaskProvider>
            <MetamaskConnector
              buttonTitle="Connect Metamask"
              notInstalledError="Metamask in not installed"
            />
          </MetaMaskProvider>
          <WalletProvider>
            <BinanceConnector
              buttonTitle="Connect Binance"
              connectorId="bsc"
              notInstalledError="Binance in not installed"
            />
          </WalletProvider>
        </div>
      </main>
    </div>
  );
}
