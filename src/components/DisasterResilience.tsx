import { Cloud, AlertTriangle, Droplet, Home, Wrench, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

export default function DisasterResilience() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2>দুর্যোগ ও সহনশীলতা</h2>
        <p className="text-gray-600">Disaster & Resilience Information</p>
      </div>

      {/* Recent Disaster */}
      <Card className="border-l-4 border-l-red-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            সাম্প্রতিক দুর্যোগ
          </CardTitle>
          <p className="text-sm text-gray-500">Recent Disaster Event</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">দুর্যোগের ধরন (Type of Disaster)</p>
              <p>বন্যা (Flood)</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ঘটনার তারিখ (Date of Occurrence)</p>
              <p>২৮ জুলাই, ২০২৪</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ক্ষতির পরিমাণ (Damage Severity)</p>
              <Badge className="bg-red-600">উচ্চ (High)</Badge>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পুনরাবৃত্তি (Frequency)</p>
              <p>প্রায় বার্ষিক (Nearly Annual)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Damage Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-600" />
            ক্ষতির বিবরণ
          </CardTitle>
          <p className="text-sm text-gray-500">Damage Assessment</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm">ঘরের ক্ষতি (House Damage)</p>
                <span className="text-sm text-gray-600">৭৫%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm">ফসলের ক্ষতি (Crop Damage)</p>
                <span className="text-sm text-gray-600">৯০%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm">গবাদি পশুর ক্ষতি (Livestock Loss)</p>
                <span className="text-sm text-gray-600">৩০%</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm">গৃহস্থালী সামগ্রীর ক্ষতি (Household Items)</p>
                <span className="text-sm text-gray-600">৫০%</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recovery & Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              মেরামত ও পুনর্বাসন
            </CardTitle>
            <p className="text-sm text-gray-500">Repair & Recovery</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">মেরামতের ব্যয় (Repair Cost)</p>
                <p>৫৫,০০০ টাকা</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">মেরামতের অবস্থা (Repair Status)</p>
                <Badge className="bg-orange-500">চলমান (Ongoing)</Badge>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">সম্পন্ন হয়েছে (Completed)</p>
                <div className="flex items-center gap-2 mt-2">
                  <Progress value={40} className="h-2 flex-1" />
                  <span className="text-sm">৪০%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              সহায়তার প্রয়োজন
            </CardTitle>
            <p className="text-sm text-gray-500">Support Needed</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span>নগদ সহায়তা</span>
                <Badge className="bg-blue-600">জরুরি</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span>গৃহ মেরামত সামগ্রী</span>
                <Badge className="bg-green-600">প্রয়োজন</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <span>খাদ্য সহায়তা</span>
                <Badge className="bg-yellow-600">প্রয়োজন</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                <span>চিকিৎসা সহায়তা</span>
                <Badge className="bg-purple-600">মাঝারি</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Water & Sanitation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            পানি ও স্যানিটেশন
          </CardTitle>
          <p className="text-sm text-gray-500">Water & Sanitation</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পানির উৎস (Water Source)</p>
              <p>নলকূপ (Tubewell)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পানির উৎসের দূরত্ব (Distance to Water Source)</p>
              <p>৫০ মিটার</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">লবণাক্ততার অবস্থা (Salinity Status)</p>
              <Badge className="bg-green-600">নিরাপদ (Safe)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">পানির গুণমান (Water Quality)</p>
              <Badge className="bg-green-600">ভালো (Good)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ল্যাট্রিনের ধরন (Latrine Type)</p>
              <p>স্যানিটারি (Sanitary)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ল্যাট্রিনের অবস্থা (Latrine Condition)</p>
              <Badge className="bg-green-600">কার্যকর (Functional)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Climate Resilience */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-blue-600" />
            জলবায়ু সহনশীলতা
          </CardTitle>
          <p className="text-sm text-gray-500">Climate Resilience</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">বৃক্ষরোপণ (Tree Plantation)</p>
              <Badge className="bg-green-600">সক্রিয় (Active)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">দুর্যোগ প্রস্তুতি প্রশিক্ষণ (Disaster Training)</p>
              <Badge className="bg-green-600">সম্পন্ন (Completed)</Badge>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">জরুরী তহবিল (Emergency Fund)</p>
              <p>১৫,০০০ টাকা</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">ঝুঁকি স্তর (Risk Level)</p>
              <Badge className="bg-orange-500">মধ্যম (Medium)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
