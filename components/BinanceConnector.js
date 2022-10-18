import { useState } from 'react';
import { useWallet } from 'react-binance-wallet';

export const BinanceConnector = (props) => {
  const { account, connect, status, library } = useWallet();

  const [reciever, setReciever] = useState('');
  const [amount, setAmount] = useState('');

  const handleConnect = () => connect(props.connectorId);

  const handleSendTransaction = async () => {
    const amountHex = (+amount * Math.pow(10, 18)).toString(16);
    const tx = {
      from: account,
      to: reciever,
      gas: '0x76c0',
      gasPrice: '0x9184e72a000',
      value: `0x${amountHex}`,
    };

    await library.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
  };

  const handleChangeReciever = (e) => setReciever(e.target.value);
  const handleChangeAmount = (e) => setAmount(e.target.value);

  return (
    <div className="py-4 border rounded-lg my-4">
      {window.BinanceChain ? (
        <>
          {status === 'disconnected' && (
            <div className="p-6">
              <button
                onClick={handleConnect}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {props.buttonTitle}
              </button>
            </div>
          )}
          {status === 'connected' && (
            <div className="p-6">
              <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 py-3 w-full items-center">
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium">
                    To Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={reciever}
                      onChange={handleChangeReciever}
                    />
                  </div>
                </div>
                <div className="mt-1 sm:col-span-2">
                  <label className="block text-lg font-medium">Amount</label>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      value={amount}
                      onChange={handleChangeAmount}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSendTransaction}
                  >
                    Send Transaction
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      ) : (
        <p>{props.notInstalledError}</p>
      )}
    </div>
  );
};
