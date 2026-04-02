import { useState } from 'react';
import { Save, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router';

const AAApproval = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate();
  const [overrideEnabled, setOverrideEnabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [modifiedRating, setModifiedRating] = useState('');
  const [justification, setJustification] = useState('');
  const [finalRemarks, setFinalRemarks] = useState('');

  const ratings = {
    ro: { kra: 8.5, personal: 9.0, functional: 8.0, overall: 8.5 },
    rvo: { kra: 8.5, personal: 9.0, functional: 8.0, overall: 8.5 }
  };

  const handleSaveDraft = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleFinalize = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/review/pending-approvals');
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/review/pending-approvals"
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Final Approval</h1>
            <p className="text-gray-600 mt-1">Employee ID: {employeeId}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleSaveDraft}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button 
            onClick={handleFinalize}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Lock className="w-4 h-4" />
            Finalize & Lock
          </button>
        </div>
      </div>

      {/* Employee Information */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="font-semibold text-gray-900 mb-4">Employee Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium text-gray-900">John Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Designation</p>
            <p className="font-medium text-gray-900">Senior Manager</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Reporting Officer</p>
            <p className="font-medium text-gray-900">Sarah Wilson</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Reviewing Officer</p>
            <p className="font-medium text-gray-900">Michael Brown</p>
          </div>
        </div>
      </div>

      {/* Rating Comparison */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Rating Summary</h2>
          <p className="text-sm text-gray-600 mt-1">Compare ratings from RO and RVO</p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Component</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">RO Rating</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">RVO Rating</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-900">KRA Performance</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      {ratings.ro.kra}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      {ratings.rvo.kra}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-900">Personal Attributes</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 font-semibold">
                      {ratings.ro.personal}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 font-semibold">
                      {ratings.rvo.personal}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-900">Functional Competency</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-semibold">
                      {ratings.ro.functional}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-semibold">
                      {ratings.rvo.functional}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50 font-semibold">
                  <td className="py-3 px-4 text-sm text-gray-900">Overall Score</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-800 font-bold">
                      {ratings.ro.overall}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-800 font-bold">
                      {ratings.rvo.overall}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Agreed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Assessment History */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Assessment Summary</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">RO's Remarks</h3>
              <p className="text-sm text-gray-900">
                Excellent performance throughout the year. Consistently exceeded expectations in project delivery
                and team management. Strong leadership qualities demonstrated.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">RVO's Remarks</h3>
              <p className="text-sm text-gray-900">
                Concur with RO's assessment. Employee has shown exceptional capabilities and maintains high
                standards of work. Recommend for advanced leadership roles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AA Override Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="font-semibold text-gray-900">Accepting Authority's Decision</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="override"
                checked={overrideEnabled}
                onChange={(e) => setOverrideEnabled(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="override" className="text-sm text-gray-700">
                I wish to modify the rating (Override)
              </label>
            </div>

            {overrideEnabled && (
              <div className="space-y-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modified Final Rating <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    step="0.1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter modified rating"
                    value={modifiedRating}
                    onChange={(e) => setModifiedRating(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Justification for Modification <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Provide detailed justification for modifying the rating..."
                    value={justification}
                    onChange={(e) => setJustification(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AA's Final Remarks
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Provide your final remarks and observations..."
                value={finalRemarks}
                onChange={(e) => setFinalRemarks(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final Grade Display */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200 p-6">
        <div className="text-center">
          <p className="text-sm text-green-700 mb-2">Final Grade</p>
          <p className="text-4xl font-bold text-green-900 mb-2">Very Good</p>
          <p className="text-lg text-green-700">Score: {ratings.rvo.overall}/10</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button 
          onClick={handleSaveDraft}
          className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Save className="w-4 h-4" />
          Save Draft
        </button>
        <button 
          onClick={handleFinalize}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          <Lock className="w-4 h-4" />
          Finalize & Lock Appraisal
        </button>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <p className="text-sm font-medium">Action completed successfully!</p>
        </div>
      )}
    </div>
  );
};

export default AAApproval;