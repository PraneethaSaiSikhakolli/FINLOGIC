import { useForm } from "react-hook-form";

interface FormData {
  amount: number;
  category: string;
  type: "income" | "expense";
  note?: string;
}

const TransactionForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Transaction submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-lg font-semibold mb-2 text-gray-700">
        Add Transaction
      </h2>
      <input
        {...register("amount", { required: true })}
        type="number"
        placeholder="Amount"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        {...register("category", { required: true })}
        type="text"
        placeholder="Category"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <select
        {...register("type")}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <textarea
        {...register("note")}
        placeholder="Note (optional)"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
