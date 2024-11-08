import React, { useState } from 'react';

const GComment = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    surgeries: [],
    comfortLevel: '',
    consultantName: ''
  });

  const doctors = [
    { id: "dr-wang", name: "王大明" },
    { id: "dr-chen", name: "陳小華" },
    { id: "dr-lin", name: "林醫師" }
  ];

  const anesthesiologists = [
    { id: "an-zhang", name: "張麻醉師" },
    { id: "an-liu", name: "劉麻醉師" },
    { id: "an-wu", name: "吳麻醉師" }
  ];

  const surgeries = [
    { id: "surgery1", name: "雷射手術" },
    { id: "surgery2", name: "微創手術" },
    { id: "surgery3", name: "一般手術" }
  ];

  const comfortLevels = [
    { id: "very-comfortable", name: "非常舒適" },
    { id: "comfortable", name: "舒適" },
    { id: "neutral", name: "普通" },
    { id: "uncomfortable", name: "不舒適" }
  ];

  const handleSurgeryChange = (surgeryId) => {
    setFormData(prev => {
      if (prev.surgeries.includes(surgeryId)) {
        return {
          ...prev,
          surgeries: prev.surgeries.filter(id => id !== surgeryId)
        };
      } else {
        return {
          ...prev,
          surgeries: [...prev.surgeries, surgeryId]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">醫療諮詢表單</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 醫師選擇 */}
            <div className="space-y-2">
              <label
                htmlFor="doctor"
                className="block text-sm font-medium text-gray-700"
              >
                醫師姓名
              </label>
              <select
                id="doctor"
                value={formData.doctor}
                onChange={(e) => setFormData(prev => ({ ...prev, doctor: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2 border"
              >
                <option value="">請選擇醫師</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 麻醉師選擇 */}
            <div className="space-y-2">
              <span className="block text-sm font-medium text-gray-700">
                麻醉師
              </span>
              <div className="space-y-2">
                {anesthesiologists.map((anesthesiologist) => (
                  <label
                    key={anesthesiologist.id}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="anesthesiologist"
                      value={anesthesiologist.id}
                      checked={formData.anesthesiologist === anesthesiologist.id}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        anesthesiologist: e.target.value
                      }))}
                      className="text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="text-sm text-gray-700">{anesthesiologist.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 手術選擇 */}
            <div className="space-y-2">
              <span className="block text-sm font-medium text-gray-700">
                手術名稱（可複選）
              </span>
              <div className="space-y-2">
                {surgeries.map((surgery) => (
                  <label
                    key={surgery.id}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.surgeries.includes(surgery.id)}
                      onChange={() => handleSurgeryChange(surgery.id)}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-700">{surgery.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 療程舒適度 */}
            <div className="space-y-2">
              <label
                htmlFor="comfort"
                className="block text-sm font-medium text-gray-700"
              >
                療程舒適度
              </label>
              <select
                id="comfort"
                value={formData.comfortLevel}
                onChange={(e) => setFormData(prev => ({ ...prev, comfortLevel: e.target.value }))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white p-2 border"
              >
                <option value="">請選擇舒適度</option>
                {comfortLevels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 諮詢師姓名 */}
            <div className="space-y-2">
              <label
                htmlFor="consultant"
                className="block text-sm font-medium text-gray-700"
              >
                諮詢師姓名
              </label>
              <input
                type="text"
                id="consultant"
                value={formData.consultantName}
                onChange={(e) => setFormData(prev => ({ ...prev, consultantName: e.target.value }))}
                placeholder="請輸入諮詢師姓名"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
              />
            </div>

            {/* 提交按鈕 */}
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              提交表單
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GComment;
