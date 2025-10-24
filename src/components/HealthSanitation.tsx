import { Activity, Heart, Utensils, HandMetal, Syringe, Hospital, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export default function HealthSanitation() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2>স্বাস্থ্য ও স্যানিটেশন</h2>
        <p className="text-gray-600">Health & Sanitation Information</p>
      </div>

      {/* Health Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-green-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">সার্বিক স্বাস্থ্য</p>
                <p className="text-sm text-gray-500">Overall Health</p>
                <Badge className="bg-green-600 mt-2">ভালো (Good)</Badge>
              </div>
              <Heart className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">টিকাকরণ অবস্থা</p>
                <p className="text-sm text-gray-500">Vaccination Status</p>
                <Badge className="bg-blue-600 mt-2">সম্পূর্ণ (Complete)</Badge>
              </div>
              <Syringe className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-600">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">স্যানিটেশন স্কোর</p>
                <p className="text-sm text-gray-500">Sanitation Score</p>
                <p className="text-purple-600 mt-2">৮.৫/১০</p>
              </div>
              <Activity className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nutrition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-blue-600" />
            পুষ্টি ও খাদ্য
          </CardTitle>
          <p className="text-sm text-gray-500">Nutrition & Food</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">নিয়মিত ৩ বেলা খাবার</p>
                  <p className="text-xs text-gray-500">3 Meals a Day</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <Badge className="bg-green-600">হ্যাঁ (Yes)</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পুষ্টিকর খাবারের সংস্থান</p>
              <p className="text-xs text-gray-500 mb-2">Access to Nutritious Food</p>
              <Badge className="bg-green-600">নিয়মিত (Regular)</Badge>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">শিশুদের পুষ্টি অবস্থা</p>
              <p className="text-xs text-gray-500 mb-2">Children's Nutrition Status</p>
              <Badge className="bg-green-600">স্বাভাবিক (Normal)</Badge>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">খাদ্য নিরাপত্তা</p>
              <p className="text-xs text-gray-500 mb-2">Food Security</p>
              <Badge className="bg-green-600">সুরক্ষিত (Secured)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Health Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            সাধারণ স্বাস্থ্য সমস্যা
          </CardTitle>
          <p className="text-sm text-gray-500">Common Health Issues</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p>সাধারণ সর্দি-কাশি (Common Cold)</p>
                  <p className="text-sm text-gray-600">বছরে ২-৩ বার (2-3 times a year)</p>
                </div>
                <Badge className="bg-yellow-600">মাঝারি</Badge>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p>দীর্ঘস্থায়ী রোগ (Chronic Disease)</p>
                  <p className="text-sm text-gray-600">না (None)</p>
                </div>
                <Badge className="bg-green-600">নিরাপদ</Badge>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p>নিয়মিত চিকিৎসা (Regular Treatment)</p>
                  <p className="text-sm text-gray-600">বছরে ১-২ বার পরীক্ষা</p>
                </div>
                <Badge className="bg-blue-600">সক্রিয়</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hygiene Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HandMetal className="w-5 h-5 text-blue-600" />
            স্বাস্থ্যবিধি অনুশীলন
          </CardTitle>
          <p className="text-sm text-gray-500">Hygiene Practices</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p>হাত ধোয়ার অভ্যাস</p>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">খাবার আগে ও পরে (Before & After Meals)</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p>সাবান ব্যবহার</p>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">নিয়মিত (Regular)</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p>স্যানিটারি ল্যাট্রিন ব্যবহার</p>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">সব সময় (Always)</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p>পরিষ্কার পানি পান</p>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">ফুটানো/বিশুদ্ধ (Boiled/Purified)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* COVID-19 Vaccination */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Syringe className="w-5 h-5 text-blue-600" />
            কোভিড-১৯ টিকাকরণ
          </CardTitle>
          <p className="text-sm text-gray-500">COVID-19 Vaccination</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">টিকার ডোজ (Vaccine Doses)</p>
              <p>২ ডোজ সম্পন্ন (2 Doses Complete)</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">শেষ ডোজের তারিখ (Last Dose Date)</p>
              <p>১৫ মার্চ, ২০২৪</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">টিকার ধরন (Vaccine Type)</p>
              <p>Pfizer-BioNTech</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">পরিবারের টিকাকরণ (Family Vaccination)</p>
              <Badge className="bg-green-600">সম্পূর্ণ (Complete)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Healthcare Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hospital className="w-5 h-5 text-blue-600" />
            স্বাস্থ্যসেবা সুবিধা
          </CardTitle>
          <p className="text-sm text-gray-500">Healthcare Access</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">নিকটতম স্বাস্থ্য কেন্দ্র (Nearest Health Center)</p>
              <p>ইউনিয়ন স্বাস্থ্য কেন্দ্র, রামপুর</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">দূরত্ব (Distance)</p>
              <p>২.৫ কিলোমিটার</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">যাতায়াত সুবিধা (Transportation)</p>
              <Badge className="bg-green-600">সহজলভ্য (Available)</Badge>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">জরুরী সেবা (Emergency Services)</p>
              <Badge className="bg-green-600">২৪/৭ উপলব্ধ</Badge>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">স্বাস্থ্য বীমা (Health Insurance)</p>
              <Badge variant="outline">নেই (None)</Badge>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">মাসিক চিকিৎসা খরচ (Monthly Medical Cost)</p>
              <p>৫০০-১,০০০ টাকা</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
