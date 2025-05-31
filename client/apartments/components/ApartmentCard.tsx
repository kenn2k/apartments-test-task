import { Edit, Home, Trash2 } from "lucide-react";
import { IApartment } from "../types";

interface ApartmentCardProps {
  apartment: IApartment;
  onEdit: (apartment: IApartment) => void;
  onDelete: (id: string) => void;
}

export const ApartmentCard = ({
  apartment,
  onEdit,
  onDelete,
}: ApartmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {apartment.title}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(apartment)}
            className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50 transition-colors"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(apartment._id)}
            className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{apartment.description}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Home className="w-4 h-4 mr-1" />
          {apartment.rooms} {apartment.rooms === 1 ? "кімната" : "кімнати"}
        </div>
        <div className="text-2xl font-bold text-green-600">
          {apartment.price.toLocaleString()} ₴
        </div>
      </div>
    </div>
  );
};
