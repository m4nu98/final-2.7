"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateJobForm = ({ onCreate, onClose }) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    
    const onSubmit = async (formData) => {
      try {
        const response = await fetch('http://localhost:4000/api/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (!response.ok) {
          throw new Error('Error al crear el job posting');
        }
  
        const responseData = await response.json();
        console.log("Job posting creado exitosamente:", responseData);
  
        // Llamar a la función onCreate o manejar el éxito de otra manera
        // onCreate(responseData); 

        // Mostrar alerta de éxito
        alert('Publicación generada con éxito');
        // Llamar a la función onClose para cerrar el formulario
        onClose();
  
      } catch (err) {
        console.error("Error al crear el job posting:", err);
      }
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white dark:bg-gray rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Create Job Posting</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="nombreApellido" className="block text-sm font-medium text-gray-700">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="nombreApellido"
                {...register('nombreApellido', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Nombre y apellido"
              />
              {errors.nombreApellido && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                DNI
              </label>
              <input
                type="text"
                id="dni"
                {...register('dni', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="DNI"
              />
              {errors.dni && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="provincia" className="block text-sm font-medium text-gray-700">
                Provincia
              </label>
              <input
                type="text"
                id="provincia"
                {...register('provincia', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Provincia"
              />
              {errors.provincia && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                {...register('direccion', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Dirección"
              />
              {errors.direccion && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="nroTelefono" className="block text-sm font-medium text-gray-700">
                Número de Teléfono
              </label>
              <input
                type="text"
                id="nroTelefono"
                {...register('nroTelefono', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Número de Teléfono"
              />
              {errors.nroTelefono && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
                Servicio
              </label>
              <input
                type="text"
                id="servicio"
                {...register('servicio', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Servicio"
              />
              {errors.servicio && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700">
                Código Postal
              </label>
              <input
                type="text"
                id="codigoPostal"
                {...register('codigoPostal', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Código Postal"
              />
              {errors.codigoPostal && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="descripcionTrabajo" className="block text-sm font-medium text-gray-700">
                Descripción de Trabajo
              </label>
              <input
                type="text"
                id="descripcionTrabajo"
                {...register('descripcionTrabajo', { required: true })}
                className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                placeholder="Descripción de Trabajo"
              />
              {errors.descripcionTrabajo && <p className="text-red-500 text-xs italic">Este campo es requerido</p>}
            </div>
  
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-50"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-300 disabled:opacity-50 ml-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creando...' : 'Crear'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default CreateJobForm;