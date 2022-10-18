import Link from "next/link";
import Head from "next/head";

export default function Home() {
  function onClickConnectWallet1(event) {
    console.log("clicked button ");
  }

  function onSendWalletTrans1(event) {
    event.preventDefault();
    const targetAddress = event.target.elements.target.value;
    const amount = event.target.elements.amount.value;
    console.log("clicked send 1");
    console.log(targetAddress);
    console.log(amount);
  }

  function onClickConnectWallet2(event) {
    console.log("clicked button 2");
  }

  function onSendWalletTrans2(event) {
    event.preventDefault();
    const targetAddress = event.target.elements.target.value;
    const amount = event.target.elements.amount.value;
    console.log("clicked send 2");
    console.log(targetAddress);
    console.log(amount);
  }

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
          <h1 className="text-4xl font-bold py-4">
            Home Page
          </h1>
          <span className="text-blue-400 hover:underline hover:text-blue-600 pt-2 pb-8">
            <Link href="/">Home</Link>
          </span>
          <div className="py-4 border rounded-lg my-4">
            <div className="p-6">
              <button
                onClick={onClickConnectWallet1}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Connect Wallet 1
              </button>
            </div>
            <div className="p-6">
              <form
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 py-3 w-full items-center"
                onSubmit={onSendWalletTrans1}
              >
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium text-gray-50">
                    To Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="target"
                      id="target"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium text-gray-50">
                    Amount
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="py-4 border rounded-lg mt-8">
            <div className="p-6">
              <button
                onClick={onClickConnectWallet2}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Connect Wallet 2
              </button>
            </div>
            <div className="p-6">
              <form
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 py-3 w-full items-center"
                onSubmit={onSendWalletTrans2}
              >
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium text-gray-50">
                    To Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="target"
                      id="target"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium text-gray-50">
                    Amount
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
