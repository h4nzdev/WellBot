"use client"

import {
  CreditCard,
  CheckCircle,
  XCircle,
  Plus,
} from "lucide-react"

export default function ClinicSubscriptions() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-3">
          <div className="bg-cyan-500 p-3 rounded-2xl shadow-lg">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Subscription</h1>
            <p className="text-slate-600 mt-1">Manage your subscription plan and billing</p>
          </div>
        </div>

        {/* Current Subscription Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Your Current Plan</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-lg font-medium text-cyan-700">Pro Plan</p>
              <p className="text-slate-600">Billed monthly at $29.99</p>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-600 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Free Plan</h3>
            <p className="text-4xl font-bold text-slate-800 mb-4">$0<span className="text-base font-normal">/month</span></p>
            <ul className="text-slate-600 mb-6 space-y-2">
              <li>Basic features</li>
              <li>Limited support</li>
              <li>Up to 3 users</li>
            </ul>
            <button
              type="button"
              className="w-full rounded-xl border border-cyan-600 text-cyan-600 font-medium py-2 hover:bg-cyan-50 cursor-not-allowed"
              disabled
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-cyan-600 p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Pro Plan</h3>
            <p className="text-4xl font-bold text-slate-800 mb-4">$29.99<span className="text-base font-normal">/month</span></p>
            <ul className="text-slate-600 mb-6 space-y-2">
              <li>All Free Plan features</li>
              <li>Priority support</li>
              <li>Unlimited users</li>
              <li>Advanced analytics</li>
            </ul>
            <button
              type="button"
              className="w-full rounded-xl bg-cyan-600 text-white font-medium py-2 cursor-not-allowed"
              disabled
            >
              Current Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Enterprise Plan</h3>
            <p className="text-4xl font-bold text-slate-800 mb-4">Custom</p>
            <ul className="text-slate-600 mb-6 space-y-2">
              <li>All Pro Plan features</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
              <li>Service level agreement</li>
            </ul>
            <button
              type="button"
              className="w-full rounded-xl border border-cyan-600 text-cyan-600 font-medium py-2 hover:bg-cyan-50 cursor-not-allowed"
              disabled
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Billing History</h2>
          <table className="w-full text-left rounded-md overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th className="py-3 px-4 font-semibold text-slate-700">Date</th>
                <th className="py-3 px-4 font-semibold text-slate-700">Amount</th>
                <th className="py-3 px-4 font-semibold text-slate-700">Status</th>
                <th className="py-3 px-4 font-semibold text-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">2024-05-01</td>
                <td className="py-3 px-4">$29.99</td>
                <td className="py-3 px-4 flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  Paid
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    className="text-cyan-600 hover:underline cursor-not-allowed"
                    disabled
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">2024-04-01</td>
                <td className="py-3 px-4">$29.99</td>
                <td className="py-3 px-4 flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  Paid
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    className="text-cyan-600 hover:underline cursor-not-allowed"
                    disabled
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
              <tr className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="py-3 px-4">2024-03-01</td>
                <td className="py-3 px-4">$29.99</td>
                <td className="py-3 px-4 flex items-center gap-2 text-red-600">
                  <XCircle className="w-5 h-5" />
                  Failed
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    className="text-cyan-600 hover:underline cursor-not-allowed"
                    disabled
                  >
                    View Invoice
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}