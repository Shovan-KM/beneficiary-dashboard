import { Briefcase, DollarSign, TrendingUp, TrendingDown, Home, Zap, Sprout } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function LivelihoodAssets() {
  const income = 180000;
  const expense = 165000;
  const balance = income - expense;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2>জীবিকা ও সম্পদ</h2>
        <p className="text-gray-600">Livelihood & Assets Information</p>
      </div>

      {/* Income & Expense Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-green-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">বার্ষিক আয়</p>
                <p className="text-sm text-gray-500">Annual Income</p>
                <p className="text-green-600 mt-2">১,৮০,০০০ টাকা</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">বার্ষিক ব্যয়</p>
                <p className="text-sm text-gray-500">Annual Expense</p>
                <p className="text-red-600 mt-2">১,৬৫,০০০ টাকা</p>
              </div>
              <TrendingDown className="w-10 h-10 text-red-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className={`border-l-4 ${balance >= 0 ? 'border-l-blue-600' : 'border-l-orange-500'}`}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">আয়-ব্যয়ের ভারসাম্য</p>
                <p className="text-sm text-gray-500">Income-Expense Balance</p>
                <p className={`mt-2 ${balance >= 0 ? 'text-blue-600' : 'text-orange-500'}`}>
                  {balance >= 0 ? '+' : ''}{balance.toLocaleString()} টাকা
                </p>
              </div>
              <DollarSign className={`w-10 h-10 opacity-20 ${balance >= 0 ? 'text-blue-600' : 'text-orange-500'}`} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Occupation Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            পেশা ও আয়ের উৎস
          </CardTitle>
          <p className="text-sm text-gray-500">Occupation & Income Source</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">মূল পেশা (Primary Occupation)</p>
              <p>কৃষি কাজ (Agriculture)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">অতিরিক্ত পেশা (Secondary Occupation)</p>
              <p>দিন মজুর (Day Laborer)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">মাসিক গড় আয় (Average Monthly Income)</p>
              <p>১৫,০০০ টাকা</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পরিবারের অন্যান্য আয় (Other Family Income)</p>
              <p>৩,০০০ টাকা/মাস</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Land & Property */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-blue-600" />
            জমি ও সম্পত্তি
          </CardTitle>
          <p className="text-sm text-gray-500">Land & Property</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">জমির মালিকানা (Land Ownership)</p>
              <Badge className="bg-green-600">হ্যাঁ (Yes)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">জমির পরিমাণ (Land Size)</p>
              <p>২.৫ শতাংশ</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">কৃষি জমি (Agricultural Land)</p>
              <p>১.৫ শতাংশ</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">বসত ভিটা (Homestead Land)</p>
              <p>১.০ শতাংশ</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* House & Infrastructure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-600" />
            ঘর ও পরিকাঠামো
          </CardTitle>
          <p className="text-sm text-gray-500">House & Infrastructure</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ঘরের ধরন (House Type)</p>
              <p>আধা-পাকা (Semi-Pucca)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ঘরের সংখ্যা (Number of Rooms)</p>
              <p>২ টি কক্ষ</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ছাদের ধরন (Roof Type)</p>
              <p>টিন (Tin)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">দেয়ালের ধরন (Wall Type)</p>
              <p>মাটি ও বাঁশ (Mud & Bamboo)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Utilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            সুবিধাসমূহ
          </CardTitle>
          <p className="text-sm text-gray-500">Utilities & Facilities</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">বিদ্যুৎ সংযোগ (Electricity Access)</p>
              <Badge className="bg-green-600">আছে (Available)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">রান্নার জ্বালানি (Cooking Fuel)</p>
              <p>কাঠ ও গ্যাস (Wood & Gas)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পানীয় জলের উৎস (Drinking Water Source)</p>
              <p>নলকূপ (Tubewell)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">শৌচাগারের ধরন (Toilet Type)</p>
              <p>স্যানিটারি (Sanitary)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Livestock */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            গৃহপালিত পশু
          </CardTitle>
          <p className="text-sm text-gray-500">Livestock</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center border border-blue-200">
              <p className="text-blue-600">🐄</p>
              <p className="text-sm text-gray-600 mt-2">গরু (Cow)</p>
              <p>২ টি</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center border border-green-200">
              <p className="text-green-600">🐐</p>
              <p className="text-sm text-gray-600 mt-2">ছাগল (Goat)</p>
              <p>৩ টি</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center border border-yellow-200">
              <p className="text-yellow-600">🐔</p>
              <p className="text-sm text-gray-600 mt-2">মুরগি (Chicken)</p>
              <p>১০ টি</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center border border-purple-200">
              <p className="text-purple-600">🦆</p>
              <p className="text-sm text-gray-600 mt-2">হাঁস (Duck)</p>
              <p>৫ টি</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}