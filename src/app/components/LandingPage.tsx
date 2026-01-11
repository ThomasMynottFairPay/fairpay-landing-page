import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Check,
  Smartphone,
  Zap,
  Shield,
  Users,
  Heart,
  Calendar,
  TrendingUp,
  RefreshCw,
  Bell,
  FileText,
  CreditCard,
  QrCode,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#9D7FFF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                F
              </span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              FairPay
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600">
              How it works
            </Button>
            <Button variant="ghost" className="text-gray-600">
              Features
            </Button>
            <Button className="bg-[#7C5CFF] hover:bg-[#6B4EEE] text-white">
              Book a demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
              <span className="text-[#7C5CFF] text-sm font-medium">
                PayTo-Powered Church Giving
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The modern way to collect church giving — fast,
              safe, and low-cost
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              PayTo-powered giving links and QR codes that
              members approve in their banking app — one-time
              setup, set-and-forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-[#7C5CFF] hover:bg-[#6B4EEE] text-white text-lg px-8 py-6">
                Book a 15-minute walkthrough
              </Button>
              <Button
                variant="outline"
                className="border-[#7C5CFF] text-[#7C5CFF] hover:bg-purple-50 text-lg px-8 py-6"
              >
                See how it works
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Bank-trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>30-second setup</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#9D7FFF]"></div>
                    <span className="font-semibold text-gray-900">
                      FairPay
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Set up weekly giving
                  </h3>
                  <p className="text-gray-600">
                    Choose your amount and approve in your
                    banking app
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-3 gap-3">
                    <button className="border-2 border-gray-200 rounded-lg py-3 hover:border-[#7C5CFF] hover:bg-purple-50 transition-all">
                      <div className="text-lg font-bold text-gray-900">
                        $20
                      </div>
                    </button>
                    <button className="border-2 border-[#7C5CFF] bg-purple-50 rounded-lg py-3">
                      <div className="text-lg font-bold text-[#7C5CFF]">
                        $50
                      </div>
                    </button>
                    <button className="border-2 border-gray-200 rounded-lg py-3 hover:border-[#7C5CFF] hover:bg-purple-50 transition-all">
                      <div className="text-lg font-bold text-gray-900">
                        $100
                      </div>
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Custom amount"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#7C5CFF]"
                    />
                  </div>
                </div>

                <Button className="w-full bg-[#7C5CFF] hover:bg-[#6B4EEE] text-white py-6 text-lg mb-4">
                  Approve in banking app →
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>
                    Bank-level security • Cancel anytime
                  </span>
                </div>
              </div>

              {/* Approval confirmation */}
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs mx-auto mt-6 border-2 border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Approved!
                    </div>
                    <div className="text-sm text-gray-600">
                      Confirmed in 3 seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why church giving needs a better way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional giving methods create unnecessary
              friction for members and admin burden for church
              teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  People intend to give… then forget
                </h3>
                <p className="text-gray-600">
                  "I'll set it up later" becomes never. The
                  moment of connection passes, and intention
                  doesn't convert to action.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bank setup is friction
                </h3>
                <p className="text-gray-600">
                  Forms, BSB numbers, account details —
                  especially painful for 18-40s who expect
                  instant, mobile-first experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Admin teams chase and reconcile
                </h3>
                <p className="text-gray-600">
                  Unpredictable giving, manual follow-ups,
                  settlement delays, and failed payments consume
                  precious time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution - In The Moment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1557240503-5ef8ff7a34c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb25ncmVnYXRpb24lMjB5b3VuZyUyMGFkdWx0c3xlbnwxfHx8fDE3NjgxMDk1OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Church congregation"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-green-50 rounded-full">
                <span className="text-green-700 text-sm font-medium">
                  The moment payments actually happen
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                "Let me set that up for you now."
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                During giving. During connection. While
                intention is high. FairPay captures the moment
                with instant setup — before the song ends.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <QrCode className="w-5 h-5 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Scan the QR code
                    </h4>
                    <p className="text-gray-600">
                      Display during service or share via
                      SMS/link
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Choose amount and approve
                    </h4>
                    <p className="text-gray-600">
                      Bank-trusted approval in their banking app
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#7C5CFF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Done in 30 seconds
                    </h4>
                    <p className="text-gray-600">
                      Recurring giving set up before they leave
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <p className="text-[#7C5CFF] font-medium italic">
                  "No forms. No entering BSB/account details. No
                  'I'll do it later.' Just scan, approve, done."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to transform church giving
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-[#7C5CFF]">
                <span className="text-2xl font-bold text-[#7C5CFF]">
                  1
                </span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <QrCode className="w-12 h-12 text-[#7C5CFF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Church generates QR/link
                </h3>
                <p className="text-gray-600">
                  Create giving links for weekly/monthly giving,
                  missions, or special appeals in seconds
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-[#7C5CFF]">
                <span className="text-2xl font-bold text-[#7C5CFF]">
                  2
                </span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <Shield className="w-12 h-12 text-[#7C5CFF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Member approves in banking app
                </h3>
                <p className="text-gray-600">
                  Bank-trusted, secure approval. No forms, no
                  account details required
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-[#7C5CFF]">
                <span className="text-2xl font-bold text-[#7C5CFF]">
                  3
                </span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <Zap className="w-12 h-12 text-[#7C5CFF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  FairPay automates everything
                </h3>
                <p className="text-gray-600">
                  Recurring collection, automatic retries,
                  visibility dashboard, and reconciliation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - PayTo Workflow Layer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
              <span className="text-[#7C5CFF] text-sm font-medium">
                More than just PayTo rails
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A complete workflow layer for church giving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most providers offer PayTo as rails. FairPay
              provides the workflows, visibility, and automation
              churches actually need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Set-and-forget giving management
                </h3>
                <p className="text-gray-600">
                  Automated recurring collections without manual
                  intervention
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Mandate + payment visibility
                </h3>
                <p className="text-gray-600">
                  Real-time dashboard showing approved,
                  upcoming, and completed payments
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Automatic retries
                </h3>
                <p className="text-gray-600">
                  Smart retry logic reduces drop-off from
                  temporary failures
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Built-in communications
                </h3>
                <p className="text-gray-600">
                  Automated confirmations and receipts for
                  givers
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  CSV export / reconciliation
                </h3>
                <p className="text-gray-600">
                  Easy export for finance teams and accounting
                  systems
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-[#7C5CFF] transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-[#7C5CFF]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Cards as fallback
                </h3>
                <p className="text-gray-600">
                  Support for card payments when bank transfer
                  isn't preferred
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-purple-300 text-sm font-medium">
                Transparent Pricing
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Save more on every transaction
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              FairPay costs less than half of traditional church
              giving platforms — with better features
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Other Platforms */}
            <Card className="border-2 border-gray-700 bg-gray-800/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-sm font-medium text-gray-400 mb-2">
                    Other Platforms
                  </div>
                  <div className="text-5xl font-bold text-gray-300 mb-2">
                    2.9%
                  </div>
                  <div className="text-xl text-gray-400">
                    + 30¢ per transaction
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      $50 donation
                    </span>
                    <span className="text-gray-300 font-semibold">
                      $1.75 fee
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      $100 donation
                    </span>
                    <span className="text-gray-300 font-semibold">
                      $3.20 fee
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      $500 donation
                    </span>
                    <span className="text-gray-300 font-semibold">
                      $14.80 fee
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-1">
                      On $10,000 monthly giving
                    </div>
                    <div className="text-2xl font-bold text-red-400">
                      $320 in fees
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FairPay */}
            <Card className="border-2 border-[#7C5CFF] bg-gradient-to-br from-[#7C5CFF] to-[#6B4EEE] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                SAVE 52%
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-sm font-medium text-purple-200 mb-2">
                    FairPay
                  </div>
                  <div className="text-5xl font-bold text-white mb-2">
                    1.4%
                  </div>
                  <div className="text-xl text-purple-100">
                    + 31¢ per transaction
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-purple-400/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-100">
                      $50 donation
                    </span>
                    <span className="text-white font-semibold">
                      $1.01 fee
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-100">
                      $100 donation
                    </span>
                    <span className="text-white font-semibold">
                      $1.71 fee
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-100">
                      $500 donation
                    </span>
                    <span className="text-white font-semibold">
                      $7.31 fee
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-400/30">
                  <div className="text-center">
                    <div className="text-purple-100 text-sm mb-1">
                      On $10,000 monthly giving
                    </div>
                    <div className="text-2xl font-bold text-white">
                      $171 in fees
                    </div>
                    <div className="text-green-300 text-sm font-semibold mt-2">
                      Save $149/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Annual Savings Calculator */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  Your potential annual savings
                </h3>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="text-gray-400 text-sm mb-2">
                      $5K monthly giving
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      $894
                    </div>
                    <div className="text-gray-300 text-xs">
                      saved per year
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="text-gray-400 text-sm mb-2">
                      $10K monthly giving
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      $1,788
                    </div>
                    <div className="text-gray-300 text-xs">
                      saved per year
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <div className="text-gray-400 text-sm mb-2">
                      $20K monthly giving
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      $3,576
                    </div>
                    <div className="text-gray-300 text-xs">
                      saved per year
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Plus:{" "}
                    <span className="text-white font-semibold">
                      No setup fees
                    </span>{" "}
                    •{" "}
                    <span className="text-white font-semibold">
                      No monthly fees
                    </span>{" "}
                    •{" "}
                    <span className="text-white font-semibold">
                      No hidden costs
                    </span>
                  </p>
                  <Button className="bg-white text-[#7C5CFF] hover:bg-gray-100">
                    Calculate your savings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for every type of church giving
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From weekly tithes to special appeals — one
              platform for all giving needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Weekly giving (tithes)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Recurring weekly or monthly contributions
                    made simple
                  </p>
                  <div className="text-sm text-[#7C5CFF] font-medium">
                    Most popular →
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Missions / building fund
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Dedicated campaigns for special projects and
                    missions
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Campaign-focused →
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-500 to-green-600 h-32 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Youth camp / events
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Event payments and registrations with
                    automated tracking
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    Event-ready →
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-32 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Pastoral care appeals
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Emergency appeals and community support
                    initiatives
                  </p>
                  <div className="text-sm text-orange-600 font-medium">
                    Rapid deployment →
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 h-32 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    One-off donation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    PayID links for instant one-time
                    contributions
                  </p>
                  <div className="text-sm text-pink-600 font-medium">
                    Instant setup →
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 h-32 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recurring + one-off mix
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Flexible giving options for every member's
                    preference
                  </p>
                  <div className="text-sm text-indigo-600 font-medium">
                    Maximum flexibility →
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by forward-thinking churches
            </h2>
            <p className="text-xl text-gray-600">
              Join churches modernising their giving experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "We saw a 40% increase in recurring givers
                    among 18-35s in the first two months. The
                    in-service QR setup is a game-changer."
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Lead Pastor
                  </div>
                  <div className="text-sm text-gray-600">
                    Pentecostal Church
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "No more chasing failed payments or manual
                    reconciliation. Our admin team saves 8+
                    hours every month."
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Operations Manager
                  </div>
                  <div className="text-sm text-gray-600">
                    Anglican Church
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Young adults actually prefer this. They
                    trust their banking app and love being able
                    to manage their giving in one place."
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Youth Pastor
                  </div>
                  <div className="text-sm text-gray-600">
                    Catholic Church
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-[#7C5CFF] to-[#9D7FFF] rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-5xl font-bold mb-2">
                  40%
                </div>
                <div className="text-purple-100">
                  Increase in youth participation
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">
                  8hrs
                </div>
                <div className="text-purple-100">
                  Admin time saved per month
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">
                  30sec
                </div>
                <div className="text-purple-100">
                  Average setup time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to modernise church giving?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join churches already using FairPay to make giving
            effortless, secure, and instant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="bg-[#7C5CFF] hover:bg-[#6B4EEE] text-white text-lg px-10 py-6">
              Book a 15-minute intro
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-10 py-6"
            >
              See a live demo
            </Button>
          </div>

          <div className="text-gray-400 text-sm">
            or{" "}
            <button className="text-[#9D7FFF] hover:text-white underline">
              Join early access waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#9D7FFF] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    F
                  </span>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  FairPay
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Making church giving fast, safe, and low-cost.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Use cases
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#7C5CFF]">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 FairPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}