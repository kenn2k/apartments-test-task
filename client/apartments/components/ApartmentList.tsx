import { Home, Plus } from "lucide-react";
import { ApartmentCard } from "./ApartmentCard";
import { LoadingSpinner } from "@/shared/UI/LoadingSpinner";
import { ApartmentListProps } from "../types";

export const ApartmentList = ({
  apartments,
  isLoading,
  onAdd,
  onEdit,
  onDelete,
}: ApartmentListProps) => {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Список квартир</h1>
        <button
          onClick={onAdd}
          className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          <span>Додати</span>
        </button>
      </div>

      {isLoading && <LoadingSpinner />}

      {!isLoading && apartments.length === 0 && (
        <div className="text-center py-12">
          <Home className="mx-auto text-gray-400 mb-4" size={64} />
          <p className="text-gray-500 mb-2">Поки що квартир немає...</p>
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Додати квартиру
          </button>
        </div>
      )}

      {!isLoading && apartments.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.map((apt) => (
            <ApartmentCard
              key={apt._id}
              apartment={apt}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
