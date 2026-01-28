import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { alertError, alertSuccess } from '../../lib/util/alert';
import { itemCreate } from '../../lib/api/ItemApi';
import { useLocalStorage } from 'react-use';
import { NumericFormat } from 'react-number-format';

export default function ItemCreate() {
  const [token] = useLocalStorage('token', '');
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!token) {
      await alertError('You must be logged in.');
      return;
    }

    const payload = {
      name,
      sku,
      selling_price: sellingPrice,
      cost_price: costPrice,
      stock,
      unit,
    };

    try {
      const response = await itemCreate(token, payload);

      if (response.status === 201) {
        await alertSuccess('Item created successfully');
        navigate('/items');
      } else {
        await alertError(response.data.message || 'Failed to create item');
      }
    } catch (err) {
      await alertError(err.response?.data?.message || err.message);
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8 bg-base-200 px-6 mt-6 rounded-box">
      <h2 className="text-xl font-semibold mb-4">Create Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Item Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">SKU</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="ITEM-001"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">Selling Price</label>
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            className="input input-bordered w-full"
            value={sellingPrice}
            onValueChange={(values) => setSellingPrice(values.value)}
            placeholder="Selling price"
            required
          />
        </div>

        <div>
          <label className="label">Cost Price</label>
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            className="input input-bordered w-full"
            value={costPrice}
            onValueChange={(values) => setCostPrice(values.value)}
            placeholder="Cost price"
          />
        </div>

        <div>
          <label className="label">Stock</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            min="0"
            required
          />
        </div>

        <div>
          <label className="label">Unit</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="pcs / box / kg"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Link to="/items" className="btn btn-outline">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
