import React, { useState } from 'react';

const Documents = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [showPdf, setShowPdf] = useState(false);

  const handleReportChange = (e) => {
    const value = e.target.value;
    setSelectedReport(value);
    
    if (value === 'proposal') {
      setShowPdf(true);
    } else {
      setShowPdf(false);
    }
  };

  return (
    <section id="reports" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto text-indigo-600 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
              Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Access project documentation and reports.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <div className="mb-6">
              <label htmlFor="report-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select Report:
              </label>
              <div className="relative">
                <select
                  id="report-select"
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
                  value={selectedReport}
                  onChange={handleReportChange}
                >
                  <option value="">Choose a report...</option>
                  <option value="proposal">Proposal</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* PDF Viewer */}
            {showPdf && (
              <div className="mt-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-96">
                    <iframe
                      src="/ProjectProposalll.pdf"
                      className="w-full h-full border-0"
                      title="Project Proposal PDF"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;

