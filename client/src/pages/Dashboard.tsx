import Navbar from "../components/Navbar";
import ChartCard from "../components/ChartCard";
import TransactionForm from "../components/TransactionForm";

const Dashboard = () => {
  const transactions = [
    { id: 1, amount: 2000, type: "income", category: "Salary" },
    { id: 2, amount: 300, type: "expense", category: "Groceries" },
    { id: 3, amount: 1000, type: "income", category: "Freelance" },
    { id: 4, amount: 500, type: "expense", category: "Transport" },
  ];

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Balance", value: balance, color: "text-indigo-600" },
            { label: "Total Income", value: income, color: "text-green-600" },
            { label: "Total Expense", value: expense, color: "text-red-600" },
          ].map(({ label, value, color }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-sm font-medium text-gray-500">{label}</h4>
              <p className={`text-2xl font-bold mt-2 ${color}`}>₹ {value}</p>
            </div>
          ))}
        </div>

        {/* Chart + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <ChartCard />
          <TransactionForm />
        </div>

        {/* Recent Transactions */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-pink-600">
            Recent Transactions
          </h3>
          <ul className="divide-y divide-gray-200 text-sm">
            {transactions.map((t) => (
              <li key={t.id} className="py-3 flex justify-between items-center">
                <span>
                  {t.type === "income" ? "+" : "-"} ₹{t.amount} • {t.category}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    t.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {t.type}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
