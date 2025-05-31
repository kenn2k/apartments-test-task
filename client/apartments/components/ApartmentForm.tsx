import { ApartmentFormProps } from "../types";

export const ApartmentForm = ({
  formData,
  onSubmit,
  handleChange,
  onClose,
  onEdit,
}: ApartmentFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Заголовок"
        className="w-full border rounded p-2"
        maxLength={90}
        required={!onEdit}
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Опис"
        className="w-full border rounded p-2"
        maxLength={335}
        required={!onEdit}
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Ціна"
        className="w-full border rounded p-2"
        min={0}
        required={!onEdit}
      />
      <select
        name="rooms"
        value={formData.rooms}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required={!onEdit}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 cursor-pointer py-2"
        >
          Скасувати
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded"
        >
          Зберегти
        </button>
      </div>
    </form>
  );
};
